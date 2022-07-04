import React from 'react';
import { Input, Select, Textarea } from './Input';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addItem } from '../../actions';

class NewItem extends React.Component {
  categories = () => {
    return ['-', 'Wardrobe', 'Kitchen'];
  };

  onSubmit = (formValues) => {
    this.props.addItem(formValues);
  };

  render() {
    return (
      <form
        className='form'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        style={{ justifyContent: 'center', display: 'flex' }}
      >
        <div className='form_rows'>
          <div className='form_row'>
            <Field component={Input} name='itemNameRU' label='Item Name' />
            <Field component={Input} name='itemNameRO' label='Item Name' />
          </div>
          <Field
            component={Select}
            options={this.categories()}
            name='itemType'
            label='Item Type'
          />
          <div className='form_rows'>
            <div className='form_row'>
              <Field
                component={Textarea}
                type='text'
                name='itemDescrRU'
                label='Item Description'
              />
              <Field
                component={Textarea}
                type='text'
                name='itemDescrRO'
                label='Item Description'
              />
            </div>
          </div>
          <input type='submit' value='Submit' className='form-button' />
        </div>
      </form>
    );
  }
}

const newItem = connect(null, { addItem })(NewItem);

export default reduxForm({ form: 'itemForm' })(newItem);
