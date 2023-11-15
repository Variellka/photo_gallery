import { useState } from 'react';
import './AddCommentForm.scss'

interface AddCommentFormProps {
    onSubmitComment: (text: string) => void
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {onSubmitComment} = props
    const [text, setText] = useState('')

    const onSendHandler = () => {
        if (text) {
            onSubmitComment(text)
            setText('')    
        }
    }

    return (
        <div className="AddCommentForm">
            <input 
                className="comment_input" 
                placeholder='write something good..'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                className="comment_button" 
                onClick={onSendHandler}
            >
                add comment
            </button>
        </div>
    );
};

export default AddCommentForm;