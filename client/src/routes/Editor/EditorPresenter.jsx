import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const EditorPresenter = () => {
  return (
    <div>
      <Editor hideModeSwitch initialEditType="wysiwyg" />
    </div>
  )
}

export default EditorPresenter
