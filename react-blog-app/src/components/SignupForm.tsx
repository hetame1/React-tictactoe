import { app } from "@/firebase"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const SignupForm = () => {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const auth = getAuth(app)
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      toast.success('회원가입이 완료되었습니다.')
      navigate('/')
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;
    
    if (name === 'email') {
      setEmail(value)
      const validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if(!value?.match(validRegex) && !value?.includes('@')) {
        setError('이메일 형식이 올바르지 않습니다.')
      } else {
        setError('')
      }
    } 

    else if (name === 'password') {
      setPassword(value)

      if (value?.length < 8) {
        setError('비밀번호는 8자리 이상이어야 합니다.')
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError('비밀번호가 일치하지 않습니다.')
      } else {
        setError('')
      }
    } 

    else if (name === 'password_confirm') {
      setPasswordConfirm(value)

      if (value?.length < 8) {
        setError('비밀번호는 8자리 이상이어야 합니다.')
      } else if (value !== password) {
        setError('비밀번호가 일치하지 않습니다.')
      } else {
        setError('')
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="form form--lg">
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input 
          type="email" 
          name="email" 
          id="title" 
          required
          value={email}
          onChange={onChange}
        />
      </div>

      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input 
          type="password" 
          name="password" 
          id="title" 
          required
          value={password}
          onChange={onChange}
        />
      </div>

      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input 
          type="password" 
          name="password_confirm" 
          id="title" 
          required
          value={passwordConfirm}
          onChange={onChange}
        />
      </div>

      {error && error.length > 0 && (
        <div className="form__block">
          <span className="form__error">{error}</span>
        </div>
      )}

      <div className="form__block">
        계정이 이미 있으신가요? <Link to="/login" className="form__link">로그인하기</Link>
      </div>

      <div className="form__block">
        <input type="submit" value="회원가입" className="form__btn--submit" disabled={error.length > 0}/>
      </div>
    </form>
  )
}

export default SignupForm