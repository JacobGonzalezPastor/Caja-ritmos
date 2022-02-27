import React, { useState } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { pads } from '../Datos/botones'
import { DrumButtons } from './DrumButtons'

const Drummachine = () => {

    const [encendido, setEncendido] = useState(false);
    const [volumen, setVolumen] = useState(1);


    const stop = () => {
        setEncendido(!encendido)
        let btnEncendido = document.getElementById('btnEncendido');
        if (encendido == true) {
            btnEncendido.classList.remove('btn-danger');
            btnEncendido.classList.add('btn-success');
        } else {
            btnEncendido.classList.remove('btn-success');
            btnEncendido.classList.add('btn-danger');
            document.getElementsByClassName('drum-pad').style.boxShadow = '2px 2px 2px 1px #2222229e'
        }
    }

    const handleVolumenChange = e => {
        setVolumen(e.target.value)
        console.log(volumen);
    }


    return (
        <div>
            <h1>Caja de ritmos</h1>
            <Grid columns={3}>
                <Grid.Row>
                    {
                        pads.map((pad, index) => (
                            <Grid.Column>
                                <Segment>
                                    <DrumButtons
                                        key={index}
                                        pad={pad}
                                        volume={volumen}
                                    />
                                </Segment>
                            </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
            <Grid columns={2} stackable textAlign='center'>
                <Grid.Row>
                    <Grid.Column>
                        <Button
                            type='button'
                            id='btnPower'
                            onClick={stop}
                        >
                            {encendido ? 'OFF' : 'ON'}
                        </Button>
                    </Grid.Column>

                    <Grid.Column>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                          <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                      </svg>
                      <input type='range' step='0.01' min={0} max={1} value={volumen} onChange={handleVolumenChange}  /> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Drummachine