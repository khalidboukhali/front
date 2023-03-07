import MultiStepForm, { FormStep } from './MultiStepForm'

function Stipper() {
  return (
    <div>
      <MultiStepForm 
          initialValues={{}}
          onSubmit = { values => {
            alert(JSON.stringify(values,null,2))
          }}
      >
        <FormStep stepName="Step 1">
        </FormStep>
        <FormStep stepName="Step 2">
        </FormStep>
        <FormStep stepName="Step 3">
        </FormStep>
        <FormStep stepName="Step 4">
        </FormStep>

      </MultiStepForm>
    </div>
  )
}

export default Stipper