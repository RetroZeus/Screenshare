async function shareScreen(displayMediaOptions) {
  var capturedVideo = null;
  try{
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions); 
  } catch(err){
    console.error(err);
  }
  return capturedVideo;
}

// Execute using shareScreen()
