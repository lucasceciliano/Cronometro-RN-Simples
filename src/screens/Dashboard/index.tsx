import React, { useState } from 'react';
 
import {
   Container,
   Text,
   Title,
   Envolve,
} from './styles';

 
export function Dashboard(){

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [customInterval, setCustomInterval] = useState<NodeJS.Timer>()

    const startTimer = () => {
        setCustomInterval(
            setInterval(() => {
                changeTime()
            }, 1000)
        )
    }

    const stopTimer = () => {
        if(customInterval) {
            clearInterval(customInterval)
        }
    }

    const clear = () => {
        stopTimer()
        setSeconds(0)
        setMinutes(0)
    }

    const changeTime = () => {
        setSeconds((prevState) => {
            if(prevState + 1 == 60) {
                setMinutes(minutes + 1 )
                return 0
            }
            return prevState + 1
        })
    }

  return (
      <Container>
          <Text>{minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</Text>
    
        <Envolve>
          <Title
           title='Acionar'
            onPress={startTimer}
            color='#fff'
            
          />
          <Title
            title='Parar'
            onPress={stopTimer}
            color='#fff'
          />
          <Title
           title='Limpar'
            onPress={clear}
            color='#fff'
          />
        </Envolve>

      </Container>
  )
}