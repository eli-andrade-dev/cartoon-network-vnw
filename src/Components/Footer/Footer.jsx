import Git from "./imagensfooter/github.png"
import Linkedin from "./imagensfooter/linkedin.png"
import Warner from "./imagensfooter/Warner"

function Footer() {
    return(
        <S.Footer>
            <img src= {Warner} alt="" />
        <S.Div>
            <img src={Git} alt="" />
            <img src={Linkedin} alt="" />
        </S.Div>


        </S.Footer>
    )
}

export default Footer