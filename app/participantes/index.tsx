import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CardParticipante from '../../components/CardParticipante/CardParticipante';
import dados from "../../data/participantes.json";

export default function Participantes() {
    return (
        <BaseScreen platform='embrace'>
            {dados.map((dado, index) => (
                <CardParticipante dados={dado} key={index} />
            ))}
        </BaseScreen>  
    )
}
