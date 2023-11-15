import { useState } from 'react';
import './AddCommentForm.scss'
import Loader from '../../../../shared/ui/Loader/Loader';

interface AddCommentFormProps {
    onSubmitComment: (text: string) => void
    addCommentLoading: boolean
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {onSubmitComment, addCommentLoading} = props
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
            {addCommentLoading 
                ? <Loader /> 
                :  
                <button 
                    className="comment_button" 
                    onClick={onSendHandler}
                >
                    add comment
                </button>}

        </div>
    );
};

export default AddCommentForm;