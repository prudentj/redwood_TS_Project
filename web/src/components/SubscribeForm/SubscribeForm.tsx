import {
  Form,
  FormError,
  // Label,
  FieldError,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const SubscribeForm = () =>
  //   {
  //   onSubmit = () => {
  //     console.log('Test')
  //   },
  //   formMethods,
  //   error,
  // }
  {
    return (
      <div>
        <Form //onSubmit={onSubmit} formMethods={formMethods} error={error}
        >
          <FormError //error={error} wrapperClassName="form-error"
          />
          {/* <Label name={'email'}>Email</Label> */}
          <div className="flex flex-row w-full py-4 border-b-2">
            <TextField
              className="w-full"
              name="email"
              // errorClassName="error"
              placeholder="Email Address"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'THERE WAS AN ERROR. PLEASE TRY AGAIN',
                },
              }}
            />
            <Submit className="">🡢</Submit>
          </div>
          <div className="py-4 ">
            <FieldError name="email" className="text-sm " />
          </div>
        </Form>
      </div>
    )
  }

export default SubscribeForm
