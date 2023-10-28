import styled from "styled-components";
import {BtnCircular, UserAuth, v} from "../../index.js"

export function DataUser(){
    const {user} = UserAuth()
    return (
        <Container>
            <div className="imgContainer">
                <img src={ user?.picture }/>
            </div>
            <div className='btncircularContainer'>
                <BtnCircular icono={ <v.iconocorona/> } width={ '25px' } heigth={ '25px' } fontSize={ '11px' }
                             bgcolor={ '#FFFFFF' }
                             textcolor={ '#181616' }/>
            </div>
        </Container>
    )

}

const Container = styled.div``