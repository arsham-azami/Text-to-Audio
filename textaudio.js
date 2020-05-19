 
        const PauseText = document.getElementById('pause')
        const StopText = document.getElementById('stop')
        const TextArea = document.getElementById('text')
        const SpeechNumber=document.getElementById('numbertext')
        
        const playtext =(text)=>{
                               
            const speech = new SpeechSynthesisUtterance(text)
            speech.rate = SpeechNumber.value || 1
            speech.addEventListener('end', ()=>{
                TextArea.disabled = false
            })
            
            TextArea.disabled = true 
            speechSynthesis.speak(speech)       
        
            }

        const ClearText=(textpar)=>{
        textpar.value =''
        }
        const LowerCase = ()=>{
          TextArea.style.textTransform ='lowercase' 
        }
        const UpperCase = ()=>{
          TextArea.style.textTransform ='uppercase' 
        }