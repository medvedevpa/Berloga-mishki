// Offline processing: trim only the edges, keep pauses inside the phrase.
export async function prepareVoiceClip(blob,enhance,boost=1){
 const Context=window.AudioContext||window.webkitAudioContext;
 if(!Context)return {blob,note:'Сохранён исходный звук'};
 let context;
 try{
  context=new Context();
  const decoded=await context.decodeAudioData(await blob.arrayBuffer());
  const size=decoded.length,rate=decoded.sampleRate,mono=new Float32Array(size);
  for(let channel=0;channel<decoded.numberOfChannels;channel++){
   const samples=decoded.getChannelData(channel);for(let i=0;i<size;i++)mono[i]+=samples[i]/decoded.numberOfChannels;
  }
  const windowSize=Math.max(1,Math.floor(rate*.02)),levels=[];
  for(let offset=0;offset<size;offset+=windowSize){let sum=0,n=Math.min(windowSize,size-offset);for(let i=0;i<n;i++)sum+=mono[offset+i]**2;levels.push(Math.sqrt(sum/n));}
  const loudest=Math.max(0,...levels);
  if(loudest<.004)throw Error('В записи почти не слышно голоса. Поднесите микрофон ближе и попробуйте ещё раз.');
  if(!enhance)return {blob,note:'Сохранён исходный звук'};
  const threshold=Math.max(.003,loudest*.055),first=levels.findIndex(v=>v>threshold),last=levels.findLastIndex(v=>v>threshold);
  const start=Math.max(0,first*windowSize-Math.floor(rate*.14)),end=Math.min(size,(last+1)*windowSize+Math.floor(rate*.2));
  let peak=0;for(let i=start;i<end;i++)peak=Math.max(peak,Math.abs(mono[i]));
  const baseGain=Math.min(2.5,.92/Math.max(peak,.001));
  const gain=Math.min(baseGain*boost,.98/Math.max(peak,.001));
  // Mono 24 kHz PCM is supported offline by Safari, Chromium and Firefox.
  const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;
  if(!Offline)return {blob,note:'Сохранён исходный звук'};
  const offline=new Offline(1,Math.max(1,Math.ceil((end-start)/rate*24000)),24000);
  const buffer=offline.createBuffer(1,end-start,rate);buffer.copyToChannel(mono.subarray(start,end),0);
  const source=offline.createBufferSource();source.buffer=buffer;
  const volume=offline.createGain();volume.gain.value=gain;source.connect(volume);volume.connect(offline.destination);source.start();
  const result=await offline.startRendering(),samples=result.getChannelData(0),data=new ArrayBuffer(44+samples.length*2),view=new DataView(data);
  const text=(at,s)=>{for(let i=0;i<s.length;i++)view.setUint8(at+i,s.charCodeAt(i));};
  text(0,'RIFF');view.setUint32(4,data.byteLength-8,true);text(8,'WAVE');text(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,24000,true);view.setUint32(28,48000,true);view.setUint16(32,2,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,samples.length*2,true);
  for(let i=0;i<samples.length;i++){const value=Math.max(-1,Math.min(1,samples[i]));view.setInt16(44+i*2,value<0?value*32768:value*32767,true);}
  return {blob:new Blob([data],{type:'audio/wav'}),note:'Паузы по краям убраны, громкость выровнена'};
 }catch(error){
  if(error.message?.startsWith('В записи'))throw error;
  // A browser may record a codec its WebAudio decoder cannot read.
  return {blob,note:'Сохранён исходный звук (обработка недоступна в этом браузере)'};
 }finally{if(context)context.close().catch(()=>{});}
}
