document.addEventListener("DOMContentLoaded", () => {
    let voices = [];
    let voicesSelect = document.querySelector("select");
    let speech = new SpeechSynthesisUtterance();
    let isSpeaking = false; 
  
    if (voicesSelect) {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voicesSelect.innerHTML = "";
  
        voices.forEach((voice, i) => {
          voicesSelect.options[i] = new Option(voice.name, i);
        });
  
        voicesSelect.addEventListener("change", () => {
          speech.voice = voices[voicesSelect.value];
        });
      }
    }
  
    document.querySelector("button").addEventListener("click", () => {
        if (isSpeaking) {
          window.speechSynthesis.cancel();
          isSpeaking = false;
        }
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
        isSpeaking = true;
      });
      document.querySelector("textarea").addEventListener("click", () => {
        if (isSpeaking) {
          window.speechSynthesis.cancel();
          isSpeaking = false;
        }
      });
  });
  