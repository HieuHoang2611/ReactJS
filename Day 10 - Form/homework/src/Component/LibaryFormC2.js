import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./LibaryForm.css";

export default function LibaryFormC2() {
  const [form, setForm] = useState({ title: '', amount: '' });
  const [dataLi, setDataLi] = useState([
    { title: "Rung Than Khoc", amount: 3 },
    { title: "Khe Uoc Ban Dau", amount: 5 },
]);

  const [action, setAction] = useState(true);

  const handleSubmit = (values, action) => {
    if (dataLi.includes(values)) {
      alert("Đã có");
      return;
    }

    if(action) {
      dataLi.push(values);
      setDataLi([...dataLi]);
    }
    else {
      dataLi[indexSelected] = values;
      setDataLi([...dataLi]);
    }
  };

  const [indexSelected, setIndexSelected] = useState(null);

  const handleEdit = (index) => {
      setIndexSelected(index);
      //setForm(dataLi[index]);
      setAction(false)
      if(!action) setAction(true)
  };

  const handleDelete = index => setDataLi(dataLi.filter((e, id) => id !== index));

  const resetForm = () => {
    setAction(true)
    setForm({
        title: '',
        amount: ''
    });
};

const handleItemChanged = (i, event) => {
dataLi[i][event.target.name] = event.target.value;
setDataLi([...dataLi]);
}

const renderRows = () =>{
  var context = this;
  return (
          dataLi.map((item, key) => {
            return (
              <tr key={"item-" + key}>
                <td>
                  <input type="text" name="title" disabled={action} value={item.title} onChange={handleItemChanged.bind(context, key)}/>
                </td>
                <td>
                  <input type="text"  name="amount" disabled={action} value={item.amount} onChange={handleItemChanged.bind(context, key)}/>
                </td>
                <td>
                  <button onClick={ ()=> handleEdit(key)}>
                    {!action?'Submit' : 'Edit'}
                  </button>
                  <button onClick={ ()=> handleDelete(key)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
  )
}

  const formSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    amount: Yup.number()
      .typeError("amount must be a number")
      .positive("amount must be greater than zero")
      .required("amount is required"),
  });
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        enableReinitialize={true}
        initialValues={form}
        onSubmit={(values,{resetForm}) => {
          handleSubmit(values,action);
          resetForm();
        }}
        validationSchema={formSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <label>Title</label>
              <Field
                type="text"
                name="title"
              ></Field>
              {errors.title && touched.title ? (
                <div className="error">{errors.title}</div>
              ) : null}
              <br />
              <label>Amount</label>
              <Field
                type="number"
                name="amount"
              ></Field>
              {errors.amount && touched.amount ? (
                <div className="error">{errors.amount}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
            <button type="reset" onClick={resetForm}>Reset</button>
          </Form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {renderRows()}
        </tbody>
      </table>
    </div>
  );
}
