'use client'

import classNames from 'classnames'
import Button from 'components/Button'
import InputField from 'components/InputField'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useCallback, useState } from 'react'

const initialValues: FormValues = {
  lastname: '',
  firstname: '',
  street: '',
  number: '',
  zip: '',
  city: '',
  telephone: '',
  email: '',
  bankAccountOwner: '',
  bank: '',
  iban: '',
  bic: '',
  datenschutz: false,
  optin: false,
}

export default function MemberForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const validate = useCallback((values: FormValues) => {
    const errors = {} as FormErrors

    // Email validation
    if (!values.email) {
      errors.email = 'Pflichtfeld'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
      errors.email = 'Ungültiges E-Mail-Format'
    }

    // IBAN validation
    if (!values.iban) {
      errors.iban = 'Pflichtfeld'
    } else if (!/DE[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){4}([0-9]{2})\s?/g.test(values.iban)) {
      errors.iban = 'Ungültige IBAN'
    }

    // BIC validation
    if (!values.bic) {
      errors.bic = 'Pflichtfeld'
    } else if (!/^[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}/g.test(values.bic)) {
      errors.bic = 'Ungültige BIC'
    }

    // ZIP validation
    if (!values.zip) {
      errors.zip = 'Pflichtfeld'
    } else if (!/^[0-9]{5}$/g.test(values.zip)) {
      errors.zip = 'Ungültige PLZ'
    }

    // Name validations
    if (!values.firstname) {
      errors.firstname = 'Pflichtfeld'
    } else if (values.firstname.length < 2) {
      errors.firstname = 'Ungültiger Vorname'
    }

    if (!values.lastname) {
      errors.lastname = 'Pflichtfeld'
    } else if (values.lastname.length < 2) {
      errors.lastname = 'Ungültiger Nachname'
    }

    // Address validations
    if (!values.street) {
      errors.street = 'Pflichtfeld'
    } else if (values.street.length < 2) {
      errors.street = 'Ungültiger Straßenname'
    }

    if (!values.number) {
      errors.number = 'Pflichtfeld'
    } else if (values.number.length < 1) {
      errors.number = 'Ungültige Hausnummer'
    }

    if (!values.city) {
      errors.city = 'Pflichtfeld'
    } else if (values.city.length < 2) {
      errors.city = 'Ungültiger Ort'
    }

    // Bank validations
    if (!values.bank) {
      errors.bank = 'Pflichtfeld'
    } else if (values.bank.length < 2) {
      errors.bank = 'Ungültiges Kreditinstitut'
    }

    if (!values.bankAccountOwner) {
      errors.bankAccountOwner = 'Pflichtfeld'
    } else if (values.bankAccountOwner.length < 2) {
      errors.bankAccountOwner = 'Ungültiger Name des Kontoinhabers/der Kontoinhaberin'
    }

    // Phone validation
    if (!values.telephone) {
      errors.telephone = 'Pflichtfeld'
    } else if (!/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g.test(values.telephone)) {
      errors.telephone = 'Ungültige Telefonnummer'
    }

    // Agreement checkboxes
    if (!values.datenschutz) {
      errors.datenschutz = 'Bitte lesen und bestätigen Sie die Datenschutzbestimmungen'
    }

    if (!values.optin) {
      errors.optin = 'Bitte stimmen Sie dem Lastschriftmandat zu'
    }

    return errors
  }, [])

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      setIsSubmitting(true)
      setError('')

      // Make the API request to our new endpoint
      const response = await fetch('/api/submit-membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
      } else {
        setError(
          data.error || 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
        )
      }
    } catch (error: any) {
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
      console.error('Form submission error:', error)
    } finally {
      setSubmitting(false)
      setIsSubmitting(false)
    }
  }

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formik) => {
        const { values, errors, touched, isValid, dirty } = formik

        const isDisabled = !isValid || !dirty || !values.datenschutz || !values.optin

        return (
          <>
            {success && (
              <div className='flex w-full flex-wrap gap-4'>
                <h2 className='w-full text-lg uppercase font-tally text-green mt-12'>
                  Mitgliedsantrag erfolgreich abgesendet!
                </h2>
                <p className='text-justify'>
                  Ihr Antrag wurde erfolgreich an uns gesendet. Der Mitgliedsbeitrag von 12,- € wird
                  einmal jährlich, jeweils zum 1.03., von Ihrem angegebenen Konto abgebucht. Bei
                  späteren Vereinseintritten erfolgt die Abbuchung 6 Wochen nach Vereinseintritt.
                </p>
                <p className='text-justify'>Wir bedanken uns herzlich für Ihre Unterstützung!</p>
              </div>
            )}
            {error !== '' && (
              <div className='flex w-full flex-wrap gap-4'>
                <h2 className='w-full text-lg uppercase font-tally text-red-600 mt-12'>
                  Oh, ein Fehler ist aufgetreten!
                </h2>
                <p className='text-justify'>
                  Beim Versand ihres Mitgliedsantrags ist ein Fehler aufgetreten. Bitte versuchen
                  Sie es später erneut, oder kontaktieren Sie uns direkt.
                </p>
                <Button href='/kontakt' text='Kontakt' type='primary' className='mt-2' />
              </div>
            )}
            {!success && error === '' && (
              <Form>
                <div className='flex w-full'>
                  <h2 className='w-full text-lg uppercase font-tally text-green mt-12'>
                    Beitritts&shy;erklärung
                  </h2>
                </div>
                <div className='flex flex-wrap w-full gap-8 mt-4 md:flex-nowrap items-start'>
                  <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
                    <p className='text-justify'>
                      Hiermit trete ich/wir dem Förderverein Kita & Familienzentrum Johanna
                      Alfhausen e.V. bei. Gleichzeitig erkenne ich die Vereinssatzung an.
                    </p>
                    <label
                      className={classNames(
                        'text-justify w-full pl-8 cursor-pointer relative',
                        'before:content[" "] before:w-6 before:h-6 before:border before:border-solid before:block before:bg-green/20 before:z-10 before:cursor-pointer before:absolute before:left-0 before:top-0.5',
                        errors.datenschutz && touched.datenschutz && 'text-red-600',
                      )}
                      htmlFor='datenschutz'
                    >
                      <Field
                        type='checkbox'
                        name='datenschutz'
                        id='datenschutz'
                        className={classNames(
                          'w-0 h-0 absolute left-0 top-0 !outline-none',
                          errors.datenschutz && touched.datenschutz
                            ? 'before:border-red-600'
                            : 'before:border-green',
                        )}
                      />
                      {values.datenschutz && (
                        <span className='absolute w-4 h-4 left-1 top-0 z-20 block'>✔</span>
                      )}
                      Über die{' '}
                      <a
                        href='/datenschutz-bestimmungen'
                        target='_blank'
                        title='Datenschutzbestimmungen'
                        className='underline text-green hover:text-green-dark hover:no-underline'
                      >
                        Datenschutzbestimmungen
                      </a>{' '}
                      bin ich informiert.
                      {errors.datenschutz && touched.datenschutz && (
                        <span className='text-red-600 text-sm block mt-2'>
                          {errors.datenschutz}
                        </span>
                      )}
                    </label>
                    <p className='text-justify'>
                      Mitglied des Vereins kann jede Person werden. Bei Minderjährigen ist der
                      Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.
                    </p>
                    <p className='text-justify'>
                      Aufnahmeanträge können beim Vorstand oder der Kita-Leitung abgegeben werden.
                      Vereinsaustritte sind jeweils schriftlich
                    </p>
                  </div>
                  <div className='flex flex-wrap items-start content-start w-full gap-4 md:w-1/2'>
                    <InputField label='Vorname' name='firstname'>
                      <Field
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='Max'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.firstname && touched.firstname && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='firstname'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <InputField label='Nachname' name='lastname'>
                      <Field
                        type='text'
                        name='lastname'
                        placeholder='Mustermann'
                        id='lastname'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.lastname && touched.lastname && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='lastname'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <div className='flex w-full gap-4'>
                      <InputField label='Straße' name='street' className='w-2/3'>
                        <Field
                          type='text'
                          name='street'
                          placeholder='Musterstraße'
                          id='street'
                          className={classNames(
                            'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                            'focus:border-green',
                            errors.street && touched.street && 'border-red-600 text-red',
                          )}
                        />
                        <ErrorMessage
                          name='street'
                          component='p'
                          className='absolute text-xs text-red-600 -bottom-1'
                        />
                      </InputField>
                      <InputField label='Hausnummer' name='number' className='w-1/3'>
                        <Field
                          type='text'
                          name='number'
                          placeholder='1a'
                          id='number'
                          maxLength={5}
                          className={classNames(
                            'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                            'focus:border-green',
                            errors.number && touched.number && 'border-red-600 text-red',
                          )}
                        />
                        <ErrorMessage
                          name='number'
                          component='p'
                          className='absolute text-xs text-red-600 -bottom-1'
                        />
                      </InputField>
                    </div>
                    <div className='flex w-full gap-4'>
                      <InputField label='PLZ' name='zip' className='w-1/3'>
                        <Field
                          type='number'
                          name='zip'
                          placeholder='12345'
                          id='zip'
                          maxLength={5}
                          className={classNames(
                            'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                            'focus:border-green',
                            errors.zip && touched.zip && 'border-red-600 text-red',
                          )}
                        />
                        <ErrorMessage
                          name='zip'
                          component='p'
                          className='absolute text-xs text-red-600 -bottom-1'
                        />
                      </InputField>
                      <InputField label='Ort' name='city' className='w-2/3'>
                        <Field
                          type='text'
                          name='city'
                          placeholder='Musterstadt'
                          id='city'
                          className={classNames(
                            'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                            'focus:border-green',
                            errors.city && touched.city && 'border-red-600 text-red',
                          )}
                        />
                        <ErrorMessage
                          name='city'
                          component='p'
                          className='absolute text-xs text-red-600 -bottom-1'
                        />
                      </InputField>
                    </div>
                    <InputField label='Telefonnummer' name='telephone'>
                      <Field
                        type='tel'
                        name='telephone'
                        placeholder='0123 456 78 90'
                        id='telephone'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.telephone && touched.telephone && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='telephone'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <InputField label='E-Mail-Adresse' name='email'>
                      <Field
                        type='email'
                        name='email'
                        placeholder='max.mustermann@email.de'
                        id='email'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.email && touched.email && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='email'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                  </div>
                </div>
                <div className='flex w-full'>
                  <h2 className='w-full text-lg uppercase font-tally text-green'>
                    SEPA-Last&shy;schriftmandat
                  </h2>
                </div>
                <div className='flex flex-wrap w-full gap-8 mt-4 md:flex-nowrap items-start'>
                  <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
                    <p className='text-justify'>Der jährliche Mitgliedsbeitrag beträgt 12 €.</p>
                    <p className='text-sm text-justify'>
                      (Bei Spenden und Mitgliedsbeiträgen bis 299 € gilt der Kontoauszug als
                      Nachweis beim Finanzamt.)
                    </p>
                    <p className='text-justify'>
                      Die Beiträge werden einmal jährlich, jeweils zum 1.03., von Ihrem angegebenen
                      Konto abgebucht. Bei späteren Vereinseintritten erfolgt die Abbuchung 6 Wochen
                      nach Vereinseintritt.
                    </p>
                    <p className='text-justify'>
                      Gläubiger-Identifikationsnummer
                      <br />
                      DE94ZZZ00002505630
                    </p>
                    <p className='text-justify'>Verwendungszweck: Name des Mitglieds/Spenders</p>
                    <label
                      className={classNames(
                        'text-justify w-full cursor-pointer relative pl-8',
                        'before:content[" "] before:w-6 before:h-6 before:border before:border-solid before:block before:bg-green/20 before:z-10 before:cursor-pointer before:absolute before:left-0 before:top-0.5',
                        errors.optin && touched.optin && 'text-red-600',
                      )}
                      htmlFor='optin'
                    >
                      <Field
                        type='checkbox'
                        name='optin'
                        id='optin'
                        className={classNames(
                          'w-0 h-0 absolute left-0 top-0 !outline-none ',
                          errors.optin && touched.optin
                            ? 'before:border-red-600'
                            : 'before:border-green',
                        )}
                      />
                      {values.optin && (
                        <span className='absolute w-4 h-4 left-1 top-0 z-20 block'>✔</span>
                      )}
                      Ich ermächtige die Freunde und Förderer Kita und Familienzentrum Johanna
                      Alfhausen e.V., Zahlungen von meinem Konto mittels Lastschrift einzuziehen.
                      Zugleich weise ich mein Kreditinstitut an, die von den Freunden und Förderern
                      Kita und Familienzentrum Johanna Alfhausen e.V. auf mein Konto gezogenen
                      Lastschriften einzulösen.
                      {errors.optin && touched.optin && (
                        <span className='text-red-600 text-sm block mt-2'>{errors.optin}</span>
                      )}
                    </label>
                  </div>
                  <div className='flex flex-wrap items-start content-start w-full gap-4 md:w-1/2'>
                    <InputField
                      label='Name des Kontoinhabers/der Kontoinhaberin'
                      name='bankAccountOwner'
                    >
                      <Field
                        type='text'
                        name='bankAccountOwner'
                        id='bankAccountOwner'
                        placeholder='Max Mustermann'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.bankAccountOwner &&
                            touched.bankAccountOwner &&
                            'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='bankAccountOwner'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <InputField label='Kreditinstitut' name='bank'>
                      <Field
                        type='text'
                        name='bank'
                        id='bank'
                        placeholder='Musterbank'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.bank && touched.bank && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='bank'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <InputField label='IBAN' name='iban'>
                      <Field
                        type='text'
                        name='iban'
                        id='iban'
                        placeholder='DE12 3456 7890 1234 5678 90'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.iban && touched.iban && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='iban'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <InputField label='BIC' name='bic'>
                      <Field
                        type='text'
                        name='bic'
                        id='bic'
                        placeholder='AAAADEBBXXX'
                        className={classNames(
                          'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
                          'focus:border-green',
                          errors.bic && touched.bic && 'border-red-600 text-red',
                        )}
                      />
                      <ErrorMessage
                        name='bic'
                        component='p'
                        className='absolute text-xs text-red-600 -bottom-1'
                      />
                    </InputField>
                    <div className='flex w-full justify-center'>
                      <Button
                        href='#'
                        type='primary'
                        text='Absenden'
                        disabled={isDisabled || isSubmitting}
                        onClick={(e) => {
                          e.preventDefault()
                          if (!isDisabled && !isSubmitting) {
                            formik.handleSubmit()
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </>
        )
      }}
    </Formik>
  )
}
