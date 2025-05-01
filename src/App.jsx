import { StyleProvider } from '@ant-design/cssinjs';
import ButtonLogin from './components/ButtonLogin';

function App() {
  return (<>
    <StyleProvider layer>

      <ButtonLogin />
     
    </StyleProvider>
  </>
  )
}

export default App
