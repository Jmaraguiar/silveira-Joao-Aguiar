import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
display:flex;
text-align:center;
flex-direction:column;
margin: auto;
width: 95%;

h1{
margin: auto;
padding-bottom:70px
}

input{
border:none;
border-bottom: solid 1px;
margin-bottom:20px;

:focus{
    outline: 0;
    border:none;
    border-bottom: solid 2px;
}
}

select{

:focus{
outline: 0;

}

`

class E2 extends React.Component {
    render () {
        return(
            <Forms>
                  <h1>Informações do ensino Superior</h1>
                  <input
                placeholder='Qual Curso?'
                 type="text"/>
                 <input
                placeholder='Qual a unidade de ensino?'
                 type="text"/>
            </Forms>
        )
    }
}

export default E2 ;