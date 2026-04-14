import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type RichTextEditorProps = {
  value: string;
  onChange: (nextValue: string) => void;
  placeholder?: string;
  heightClassName?: string;
};

const normalizeEditorHtml = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "<p><br></p>") {
    return "";
  }

  return trimmed;
};

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Write content",
  heightClassName = "h-80",
}: RichTextEditorProps) => {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);
  const onChangeRef = useRef(onChange);
  const isSyncingRef = useRef(false);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!editorRef.current || !toolbarRef.current || quillRef.current) {
      return;
    }

    const editorHost = editorRef.current;
    // React StrictMode can mount/unmount effects twice in dev.
    // Reset host content so Quill toolbar/container do not get duplicated.
    editorHost.innerHTML = "";

    const quill = new Quill(editorHost, {
      theme: "snow",
      placeholder,
      modules: {
        toolbar: toolbarRef.current,
      },
    });

    quillRef.current = quill;
    quill.root.classList.add("text-[16px]", "leading-7", "font-sans");
    isSyncingRef.current = true;
    quill.clipboard.dangerouslyPasteHTML(
      normalizeEditorHtml(value) || "<p><br></p>",
    );
    isSyncingRef.current = false;

    const handleTextChange = () => {
      if (isSyncingRef.current) {
        return;
      }

      const nextHtml = normalizeEditorHtml(quill.root.innerHTML);
      onChangeRef.current(nextHtml);
    };

    quill.on("text-change", handleTextChange);

    return () => {
      quill.off("text-change", handleTextChange);
      quillRef.current = null;
      editorHost.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) {
      return;
    }

    const nextHtml = normalizeEditorHtml(value);
    const currentHtml = normalizeEditorHtml(quill.root.innerHTML);

    if (currentHtml !== nextHtml) {
      isSyncingRef.current = true;
      quill.clipboard.dangerouslyPasteHTML(nextHtml || "<p><br></p>");
      isSyncingRef.current = false;
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-white border border-gray-300 focus-within:border-black transition-colors">
      <div ref={toolbarRef} className="bg-white border-b border-gray-300">
        <span className="ql-formats">
          <select className="ql-header" defaultValue="">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="">Normal</option>
          </select>
        </span>
        <span className="ql-formats">
          <button className="ql-bold" type="button" />
          <button className="ql-italic" type="button" />
          <button className="ql-underline" type="button" />
          <button className="ql-strike" type="button" />
        </span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered" type="button" />
          <button className="ql-list" value="bullet" type="button" />
        </span>
        <span className="ql-formats">
          <button className="ql-link" type="button" />
          <button className="ql-blockquote" type="button" />
          <button className="ql-clean" type="button" />
        </span>
      </div>
      <div
        ref={editorRef}
        className={`${heightClassName} bg-white [&_.ql-container.ql-snow]:h-full [&_.ql-container.ql-snow]:border-0 [&_.ql-editor]:h-full [&_.ql-editor]:overflow-y-auto [&_.ql-editor]:cursor-text [&_.ql-editor]:pointer-events-auto`}
      />
    </div>
  );
};

export default RichTextEditor;
