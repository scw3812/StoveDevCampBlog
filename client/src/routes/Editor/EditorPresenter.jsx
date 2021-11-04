import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Header, Footer } from '../../components';
import {
  Container,
  EditorMain,
  TitleInput,
  DescriptionInput,
  TagsContainer,
  TagInput,
  Tag,
  SubmitButton
} from './Editor.style';

const EditorPresenter = ({
  title,
  description,
  tag,
  tags,
  editorRef,
  onTitleChange,
  onDescriptionChange,
  onContentChange,
  onUploadImage,
  onTagChange,
  onEnterTag,
  onClickTag,
  onSubmit
}) => {
  return (
    <Container>
      <Header />
      <EditorMain>
        <TitleInput value={title} placeholder="Input Post Title" onChange={({ target }) => onTitleChange(target.value)} />
        <DescriptionInput value={description} placeholder="Input Post Description" onChange={({ target }) => onDescriptionChange(target.value)} />
        <Editor
          hideModeSwitch height="70vh" 
          initialEditType="wysiwyg" 
          ref={editorRef} 
          onChange={onContentChange}
          hooks={{ addImageBlobHook: onUploadImage }}
        />
        <TagsContainer>
          <TagInput
            placeholder="Input Post Tags"
            value={tag}
            onKeyUp={(event) => onEnterTag(event)}
            onChange={({ target }) => onTagChange(target.value)}
          />
          {tags.map((tag, index) =>
            <Tag key={index} index={index} onClick={({ target }) => onClickTag(target.innerText)}>{tag}</Tag>)}
        </TagsContainer>
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </EditorMain>
      <Footer />
    </Container>
  )
}

export default EditorPresenter
