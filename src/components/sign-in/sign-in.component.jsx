import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import signInWithGoogle from '../../firebase/firebase.utils.js';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='email'
                    required
                    />
                    

                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label='password'
                    required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            
                            SIGN In With Google
                        
                        </CustomButton>
                    </div>
                   
                    
                </form>
            </div>
        )
    }
}