import React from 'react';
import { Input, Select, Textarea } from './Input';
import { reduxForm, Field } from 'redux-form';

class NewItem extends React.Component {
  categories = () => {
    return ['-', 'Wardrobe', 'Kitchen']
  }

  render() {
    return (
      <form className="form">
        <Field component={Input} name="itemName" label="Item Name" />
        <Field component={Select} options={this.categories()} type="text" name="itemType" label="Item Type" />
        <Field component={Textarea} type="text" name="itemDescr" label="Item Description" />
        <input type="submit" value="Submit" className="form-button" />
      </form>
    )
  }
}

export default reduxForm({ form: 'itemForm' })(NewItem);