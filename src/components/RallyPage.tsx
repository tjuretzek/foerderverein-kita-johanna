'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import InputField from './InputField'
import TrackedButton from './TrackedButton'

interface RallyPageProps {
  pageId: string
  title: string
  content: React.ReactNode
  question: string
  onSuccess?: () => void
}

const RallyPage: React.FC<RallyPageProps> = ({ pageId, title, content, question, onSuccess }) => {
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Get name from localStorage on component mount
    const savedName = localStorage.getItem('rally_user_name')
    if (savedName) {
      setName(savedName)
    }

    // Check if user has already submitted for this page
    const submittedPages = JSON.parse(localStorage.getItem('rally_submitted_pages') || '[]')
    if (submittedPages.includes(pageId)) {
      setIsSubmitted(true)
    }
  }, [pageId])

  const handleNameChange = (value: string) => {
    setName(value)
    // Save to localStorage whenever name changes
    localStorage.setItem('rally_user_name', value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Bitte geben Sie Ihren Namen ein.')
      return
    }

    if (!answer.trim()) {
      setError('Bitte beantworten Sie die Frage.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/rally/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          pageId,
          answer: answer.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Fehler beim Speichern der Daten')
      }

      // Mark page as submitted
      const submittedPages = JSON.parse(localStorage.getItem('rally_submitted_pages') || '[]')
      submittedPages.push(pageId)
      localStorage.setItem('rally_submitted_pages', JSON.stringify(submittedPages))

      setIsSubmitted(true)
      onSuccess?.()
    } catch (err) {
      setError('Fehler beim Speichern der Daten. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className='max-w-2xl mx-auto p-6 bg-green-50 rounded-lg'>
        <h2 className='w-full text-lg uppercase font-tally text-green mb-4'>Vielen Dank!</h2>
        <p className='text-green-700'>
          Sie haben diese Station bereits besucht. Vielen Dank für Ihre Teilnahme!
        </p>
      </div>
    )
  }

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='w-full font-bold uppercase font-tally text-orange-dark mb-6'>{title}</h1>

      <div className='mb-8'>{content}</div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <InputField name='name' label='Ihr Name'>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className={classNames(
              'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
              'focus:border-green',
              error && !name.trim() && 'border-red-600 text-red',
            )}
            placeholder='Geben Sie Ihren Namen ein...'
            required
          />
          {error && !name.trim() && (
            <p className='absolute text-xs text-red-600 -bottom-1'>
              Bitte geben Sie Ihren Namen ein.
            </p>
          )}
        </InputField>

        <div className='relative'>
          <label htmlFor='answer' className='block mb-1 text-sm text-gray-700'>
            {question}
          </label>
          <input
            type='text'
            id='answer'
            name='answer'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={classNames(
              'bg-green/20 w-full px-2 pb-2 pt-3 border-green border z-10 !outline-none',
              'focus:border-green',
              error && !answer.trim() && 'border-red-600 text-red',
            )}
            placeholder='Ihre Antwort...'
            required
          />
          {error && !answer.trim() && (
            <p className='text-xs text-red-600 mt-1'>Bitte beantworten Sie die Frage.</p>
          )}
        </div>

        {error && <div className='text-red-600 text-sm'>{error}</div>}

        <div className='flex w-full justify-center'>
          <TrackedButton
            href='#'
            type='primary'
            text={isSubmitting ? 'Wird gespeichert...' : 'Antwort absenden'}
            disabled={isSubmitting}
            trackingName='Rally Checkin'
            location={`Rally ${pageId}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault()
              if (!isSubmitting) {
                handleSubmit(e as any)
              }
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default RallyPage
