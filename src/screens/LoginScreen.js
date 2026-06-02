import { getAuth } from './src/firebaseConfig.js';
import { initializeApp } from "./src/firebaseConfig.js";
import { createUserWithEmailAndPassword }
from 'firebase/auth';
import { signInWithEmailAndPassword }
from 'firebase/auth';
import app from './firebaseConfig';

export default function Login(){
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const router = useRouter();
  const criarConta = () => {
    createUserWithEmailAndPassword(
      getAuth,
    )
    .then((userCredential) => {
      console.log('Usuário criado!');
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log('Erro');
      console.log(error);
    });
  };
  const login = () => {
    signInWithEmailAndPassword(
      getAuth,
    )
    .then((userCredential) => {
      console.log('Login realizado!');
    })
    .catch((error) => {
      console.log(error);
    });
  };
}