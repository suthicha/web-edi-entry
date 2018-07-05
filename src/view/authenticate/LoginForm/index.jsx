import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../authActions';
import TextInput from '../../../common/form/TextInput';
import LoadingComponent from '../../../common/utils/LoadingComponent';
import Logo from '../../../assets/images/logo.png';
import { 
    Button, 
    Checkbox, 
    Form, 
    Grid, 
    Image, 
    Segment, 
    Responsive 
} from 'semantic-ui-react';
import {
    combineValidators,
    isRequired
} from "revalidate";


class LoginForm extends Component {
    state ={}
    handleOnUpdate = (e, { width }) => this.setState({ width })

    handleFormSubmit = values => {
        const { email, password } = values;
        this.props.login(email, password, (res)=>{
            console.log(res);
        });
    }

    render(){
        const { width } = this.state;
        const { handleSubmit, loading } = this.props;
        
        if(loading) return <LoadingComponent content="Logging in..."/>;
        return(
            <Responsive as={Grid} columns={1} fireOnMount onUpdate={this.handleOnUpdate}>
                <Grid centered columns={width > 460? 2: 1} style={{height: '100vh'}}>
                    <Grid.Column style={{height: '100vh'}}>
                        <Segment raised style={{
                            top: '50%',
                            marginTop: '-180px'
                        }}>
                        <h2 className="ui teal image header">
                            <Image src={Logo} />
                            <div className="content">
                                Log-in to your content
                            </div>
                        </h2>
                            <Form error onSubmit={handleSubmit(this.handleFormSubmit)}>
                                <Field 
                                    name="email"
                                    type="email"
                                    placeholder="Username"
                                    component={TextInput}
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    component={TextInput}
                                />
                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Responsive>
        )
    }
};


const mapStates = (state) => {
    return {
        loading: state.async.loading,
    }
};

const mapActions = {
    login
};

const validate = combineValidators({
    email: isRequired({message: 'Email is require.'}),
    password: isRequired({message: 'Password is require'})
});

const connectLoginForm = connect(mapStates, mapActions)(
    reduxForm({
        form: 'loginForm',
        validate
    })(LoginForm)
);

export { connectLoginForm as LoginForm };