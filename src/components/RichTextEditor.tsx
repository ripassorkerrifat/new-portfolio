"use client";

import React from "react";
import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {TextStyle} from "@tiptap/extension-text-style";
import {Color} from "@tiptap/extension-color";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaListUl,
    FaListOl,
    FaQuoteLeft,
    FaCode,
    FaLink,
    FaUndo,
    FaRedo,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaHeading,
} from "react-icons/fa";

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    height?: number;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value,
    onChange,
    placeholder = "Write your project description here...",
    height = 450,
}) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                },
            }),
            Underline,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-[var(--primary-color)] underline cursor-pointer",
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: "max-w-full h-auto rounded-lg",
                },
            }),
            Placeholder.configure({
                placeholder,
            }),
            TextStyle,
            Color,
        ],
        content: value,
        onUpdate: ({editor}) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none",
            },
        },
    });

    React.useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    const addLink = () => {
        const url = window.prompt("Enter URL:");
        if (url && editor) {
            editor.chain().focus().setLink({href: url}).run();
        }
    };

    if (!editor) {
        return (
            <div className="h-[450px] bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary-color)]"></div>
            </div>
        );
    }

    const ToolbarButton = ({
        onClick,
        isActive,
        children,
        title,
    }: {
        onClick: () => void;
        isActive?: boolean;
        children: React.ReactNode;
        title: string;
    }) => (
        <button
            type="button"
            onClick={onClick}
            title={title}
            className={`p-2 rounded-lg transition-all duration-200 ${
                isActive
                    ? "bg-[var(--primary-color)] text-white"
                    : "text-[var(--text-primary)] hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)]"
            }`}>
            {children}
        </button>
    );

    return (
        <div className="tiptap-editor-wrapper">
            <style jsx global>{`
                .tiptap-editor-wrapper {
                    background: var(--primary-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .tiptap-toolbar {
                    background: var(--card-bg);
                    border-bottom: 1px solid var(--border-color);
                    padding: 12px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                }

                .tiptap-editor {
                    min-height: ${height}px;
                    max-height: ${height}px;
                    overflow-y: auto;
                    padding: 20px;
                    color: var(--text-primary);
                    font-size: 15px;
                    line-height: 1.6;
                }

                .tiptap-editor .ProseMirror {
                    outline: none;
                    min-height: ${height - 40}px;
                }

                .tiptap-editor
                    .ProseMirror
                    p.is-editor-empty:first-child::before {
                    color: var(--text-secondary);
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    pointer-events: none;
                }

                .tiptap-editor h1,
                .tiptap-editor h2,
                .tiptap-editor h3,
                .tiptap-editor h4,
                .tiptap-editor h5,
                .tiptap-editor h6 {
                    color: var(--text-primary);
                    font-weight: 700;
                    margin: 1em 0 0.5em 0;
                }

                .tiptap-editor h1 {
                    font-size: 2em;
                }
                .tiptap-editor h2 {
                    font-size: 1.75em;
                }
                .tiptap-editor h3 {
                    font-size: 1.5em;
                }
                .tiptap-editor h4 {
                    font-size: 1.25em;
                }

                .tiptap-editor p {
                    color: var(--text-primary);
                    margin: 0.5em 0;
                }

                .tiptap-editor a {
                    color: var(--primary-color);
                    text-decoration: underline;
                }

                .tiptap-editor blockquote {
                    border-left: 4px solid var(--primary-color);
                    padding-left: 16px;
                    margin: 1em 0;
                    color: var(--text-secondary);
                }

                .tiptap-editor code {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    padding: 2px 6px;
                    color: var(--text-primary);
                    font-family: monospace;
                }

                .tiptap-editor pre {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 12px;
                    overflow-x: auto;
                }

                .tiptap-editor pre code {
                    border: none;
                    padding: 0;
                }

                .tiptap-editor ul {
                    list-style-type: disc;
                    padding-left: 1.5em;
                    margin: 0.5em 0;
                }

                .tiptap-editor ol {
                    list-style-type: decimal;
                    padding-left: 1.5em;
                    margin: 0.5em 0;
                }

                .tiptap-editor ul ul {
                    list-style-type: circle;
                }

                .tiptap-editor ul ul ul {
                    list-style-type: square;
                }

                .tiptap-editor li {
                    display: list-item;
                    margin: 0.25em 0;
                }

                .tiptap-editor .ProseMirror ul,
                .tiptap-editor .ProseMirror ol {
                    padding-left: 1.5em;
                }

                .tiptap-editor .ProseMirror ul {
                    list-style-type: disc;
                }

                .tiptap-editor .ProseMirror ol {
                    list-style-type: decimal;
                }

                .tiptap-editor .ProseMirror li {
                    display: list-item;
                }

                .tiptap-editor::-webkit-scrollbar {
                    width: 8px;
                }

                .tiptap-editor::-webkit-scrollbar-track {
                    background: var(--primary-bg);
                }

                .tiptap-editor::-webkit-scrollbar-thumb {
                    background: var(--border-color);
                    border-radius: 4px;
                }

                .tiptap-editor::-webkit-scrollbar-thumb:hover {
                    background: var(--primary-color);
                }
            `}</style>

            {/* Toolbar */}
            <div className="tiptap-toolbar">
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive("bold")}
                    title="Bold">
                    <FaBold />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive("italic")}
                    title="Italic">
                    <FaItalic />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    isActive={editor.isActive("underline")}
                    title="Underline">
                    <FaUnderline />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    isActive={editor.isActive("strike")}
                    title="Strikethrough">
                    <FaStrikethrough />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleHeading({level: 2}).run()
                    }
                    isActive={editor.isActive("heading", {level: 2})}
                    title="Heading">
                    <FaHeading />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                    }
                    isActive={editor.isActive({textAlign: "left"})}
                    title="Align Left">
                    <FaAlignLeft />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                    }
                    isActive={editor.isActive({textAlign: "center"})}
                    title="Align Center">
                    <FaAlignCenter />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                    }
                    isActive={editor.isActive({textAlign: "right"})}
                    title="Align Right">
                    <FaAlignRight />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    isActive={editor.isActive("bulletList")}
                    title="Bullet List">
                    <FaListUl />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    isActive={editor.isActive("orderedList")}
                    title="Numbered List">
                    <FaListOl />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    isActive={editor.isActive("blockquote")}
                    title="Blockquote">
                    <FaQuoteLeft />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                    }
                    isActive={editor.isActive("codeBlock")}
                    title="Code Block">
                    <FaCode />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton onClick={addLink} title="Add Link">
                    <FaLink />
                </ToolbarButton>

                <div className="h-6 w-px bg-[var(--border-color)] mx-1" />

                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    title="Undo">
                    <FaUndo />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    title="Redo">
                    <FaRedo />
                </ToolbarButton>
            </div>

            {/* Editor Content */}
            <div className="tiptap-editor">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default RichTextEditor;
