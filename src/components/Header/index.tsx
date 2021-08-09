import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void // Indica que a função não recebe nenhum paramentro e não possui nenhum retorno
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}