import React from 'react'
import { Button, Modal, TextArea, Input, ModalDescription } from 'semantic-ui-react'

export function HandleMailSendModal({ props }) {
    const {open, setOpen} = props
    const [name, setName] = React.useState(" ")
    const [mail, setMail] = React.useState(" ")
    const [text, setText] = React.useState(" ")

    function handleSendClick() {
        setOpen(false)
    }

    function handleCancelClick() {
        setOpen(false)
    }

    if (!open) return null;
    return (
        <Modal
            className='Modal'
            onOpen={()=>setOpen(true)}
            onClose={()=>setOpen(false)}
            open={open}>

            <Modal.Header>Contact</Modal.Header>
            <Modal.Content>
            <ModalDescription>
                <p className='font-bold'>Name:</p>
                <Input className="mb-4" required fluid value={name} onChange={(e)=>{setName(e.target.value)}} />
                <p className='font-bold'>Mail ID:</p>
                <Input className="mb-4" required fluid value={mail} onChange={(e)=>{setMail(e.target.value)}} />
                <p className='font-bold'>Message:</p>
                <form className='ui form'>
                <TextArea size='massive' required value={text} onChange={(e)=>{setText(e.target.value)}} style={{ minHeight: 100, "minWidth": "100%"}} rows="3"></TextArea></form>
            </ModalDescription>
            </Modal.Content>
            <Modal.Actions>
                <Button content='Send'
                        labelPosition='right'
                        icon='checkmark'
                        onClick={handleSendClick}
                        color='green' />
                <Button content='Cancel'
                        labelPosition='right'
                        icon='close'
                        onClick={handleCancelClick}
                        color='grey' />
            </Modal.Actions>
        
        </Modal>
    )
} 