import { useState, useRef } from "react";
import EditorPresenter from "./EditorPresenter";
import { postAPI } from "../../api";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [deleteImages, setDeleteImages] = useState([]);
  const editorRef = useRef();

  const handleTitleChange = (title) => setTitle(title);
  const handleDescriptionChange = (description) => setDescription(description);
  const handleContentChange = () => setContent(editorRef.current.getInstance().getHTML());
  const handleImage = async (blob, callback) => {
    try {
      const alt = blob.name;
      const formData = new FormData();
      formData.append('postImage', blob);
      const { data } = await postAPI.postImage(formData);
      const url = data.url;
      setDeleteImages(prev => [...prev, url]);
      callback(url, alt);
    } catch (err) {
      alert(err);
    }
  }
  const handleTagChange = (tag) => setTag(tag);
  const handleEnterTag = (event) => {
    if (tag === "") {
      return;
    }
    if (event.keyCode === 13 && !tags.includes(tag)) {
      setTag("");
      setTags(tags => [...tags, tag]);
    }
  }
  const handleClickTag = (tag) => setTags(tags.filter(prevTag => prevTag !== tag));
  const handleSubmit = async () => {
    try {
      if (title === "") {
        throw new Error("제목을 입력해주세요");
      }
      if (description === "") {
        throw new Error("요약을 입력해주세요");
      }
      if (content === "") {
        throw new Error("내용을 입력해주세요");
      }
      const el = document.createElement('html');
      el.innerHTML = content;
      const imageEls = el.getElementsByTagName('img');
      const images = 
        Array.from(imageEls).filter(image => image.className !== "ProseMirror-separator").map(image => image.src);
      const newDeleteImages = deleteImages.filter(image => !images.includes(image));
      await postAPI.postPost({ title, description, content, tags, deleteImages: newDeleteImages });
    } catch (err) {
      alert(err.response ? err.response.data : err);
    }
  }

  return <EditorPresenter
            tag={tag}
            tags={tags}
            editorRef={editorRef}
            onTitleChange={handleTitleChange}
            onDescriptionChange={handleDescriptionChange}
            onContentChange={handleContentChange}
            onUploadImage={handleImage}
            onTagChange={handleTagChange}
            onEnterTag={handleEnterTag}
            onClickTag={handleClickTag}
            onSubmit={handleSubmit}
          />;
}

export default Editor;
