import React, { useState } from 'react';
 
import {
   Container,
   Text,
   Button,
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
    
          <Button
            title='Acionar'
            onPress={startTimer}
          />
          <Button
            title='Parar'
            onPress={stopTimer}
          />
          <Button
            title='Limpar'
            onPress={clear}
          />

      </Container>
  )
}