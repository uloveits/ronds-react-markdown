/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'


// addition
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import Mention from '@ckeditor/ckeditor5-mention/src/mention'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
// import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode'


export default class FullEditor extends ClassicEditorBase { }

const EMOJIS_ARRAY = [
  { character: '🙈', title: 'See-No-Evil Monkey' },
  { character: '🙄', title: 'Face With Rolling Eyes' },
  { character: '🙃', title: 'Upside Down Face' },
  { character: '🙂', title: 'Slightly Smiling Face' },
  { character: '😴', title: 'Sleeping Face' },
  { character: '😳', title: 'Flushed Face' },
  { character: '😱', title: 'Face Screaming in Fear' },
  { character: '😭', title: 'Loudly Crying Face' },
  { character: '😬', title: 'Grimacing Face' },
  { character: '😩', title: 'Weary Face' },
  { character: '😢', title: 'Crying Face' },
  { character: '😡', title: 'Pouting Face' },
  { character: '😞', title: 'Disappointed Face' },
  { character: '😜', title: 'Face with Stuck-Out Tongue and Winking Eye' },
  { character: '😚', title: 'Kissing Face With Closed Eyes' },
  { character: '😘', title: 'Face Throwing a Kiss' },
  { character: '😔', title: 'Pensive Face' },
  { character: '😒', title: 'Unamused Face' },
  { character: '😑', title: 'Expressionless Face' },
  { character: '😐', title: 'Neutral Face' },
  { character: '😏', title: 'Smirking Face' },
  { character: '😎', title: 'Smiling Face with Sunglasses' },
  { character: '😍', title: 'Smiling Face with Heart-Eyes' },
  { character: '😌', title: 'Relieved Face' },
  { character: '😋', title: 'Face Savoring Delicious Food' },
  { character: '😊', title: 'Smiling Face with Smiling Eyes' },
  { character: '😉', title: 'Winking Face' },
  { character: '😈', title: 'Smiling Face With Horns' },
  { character: '😇', title: 'Smiling Face with Halo' },
  { character: '😆', title: 'Smiling Face with Open Mouth and Tightly-Closed Eyes' },
  { character: '😅', title: 'Smiling Face with Open Mouth and Cold Sweat' },
  { character: '😄', title: 'Smiling Face with Open Mouth and Smiling Eyes' },
  { character: '😃', title: 'Smiling Face with Open Mouth' },
  { character: '😂', title: 'Face with Tears of Joy' },
  { character: '😁', title: 'Grinning Face with Smiling Eyes' },
  { character: '😀', title: 'Grinning Face' },
  { character: '🥺', title: 'Pleading Face' },
  { character: '🥵', title: 'Hot Face' },
  { character: '🥴', title: 'Woozy Face' },
  { character: '🥳', title: 'Partying Face' },
  { character: '🥰', title: 'Smiling Face with Hearts' },
  { character: '🤭', title: 'Face with Hand Over Mouth' },
  { character: '🤪', title: 'Zany Face' },
  { character: '🤩', title: 'Grinning Face with Star Eyes' },
  { character: '🤦', title: 'Face Palm' },
  { character: '🤤', title: 'Drooling Face' },
  { character: '🤣', title: 'Rolling on the Floor Laughing' },
  { character: '🤔', title: 'Thinking Face' },
  { character: '🤞', title: 'Crossed Fingers' },
  { character: '🙏', title: 'Person with Folded Hands' },
  { character: '🙌', title: 'Person Raising Both Hands in Celebration' },
  { character: '🙋', title: 'Happy Person Raising One Hand' },
  { character: '🤷', title: 'Shrug' },
  { character: '🤗', title: 'Hugging Face' },
  { character: '🖤', title: 'Black Heart' },
  { character: '🔥', title: 'Fire' },
  { character: '💰', title: 'Money Bag' },
  { character: '💯', title: 'Hundred Points Symbol' },
  { character: '💪', title: 'Flexed Biceps' },
  { character: '💩', title: 'Pile of Poo' },
  { character: '💥', title: 'Collision' },
  { character: '💞', title: 'Revolving Hearts' },
  { character: '💜', title: 'Purple Heart' },
  { character: '💚', title: 'Green Heart' },
  { character: '💙', title: 'Blue Heart' },
  { character: '💗', title: 'Growing Heart' },
  { character: '💖', title: 'Sparkling Heart' },
  { character: '💕', title: 'Two Hearts' },
  { character: '💔', title: 'Broken Heart' },
  { character: '💓', title: 'Beating Heart' },
  { character: '💐', title: 'Bouquet' },
  { character: '💋', title: 'Kiss Mark' },
  { character: '💀', title: 'Skull' },
  { character: '👑', title: 'Crown' },
  { character: '👏', title: 'Clapping Hands Sign' },
  { character: '👍', title: 'Thumbs Up Sign' },
  { character: '👌', title: 'OK Hand Sign' },
  { character: '👉', title: 'Backhand Index Pointing Right' },
  { character: '👈', title: 'Backhand Index Pointing Left' },
  { character: '👇', title: 'Backhand Index Pointing Down' },
  { character: '👀', title: 'Eyes' },
  { character: '🎶', title: 'Multiple Musical Notes' },
  { character: '🎊', title: 'Confetti Ball' },
  { character: '🎉', title: 'Party Popper' },
  { character: '🎈', title: 'Balloon' },
  { character: '🎂', title: 'Birthday Cake' },
  { character: '🎁', title: 'Wrapped Gift' },
  { character: '🌹', title: 'Rose' },
  { character: '🌸', title: 'Cherry Blossom' },
  { character: '🌞', title: 'Sun with Face' },
  { character: '❤️', title: 'Red Heart' },
  { character: '❣️', title: 'Heavy Heart Exclamation Mark Ornament' },
  { character: '✨', title: 'Sparkles' },
  { character: '✌️', title: 'Victory Hand' },
  { character: '✅', title: 'Check Mark Button' },
  { character: '♥️', title: 'Heart Suit' },
  { character: '☺️', title: 'Smiling Face' },
  { character: '☹️', title: 'Frowning Face' },
  { character: '☀️', title: 'Sun' }
];

/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji(editor) {
  if (!editor.plugins.get('SpecialCharacters')) {
    return;
  }

  // Make sure Emojis are last on the list.
  this.afterInit = function () {
    editor.plugins.get('SpecialCharacters').addItems('Emoji', EMOJIS_ARRAY);
  }
}

// Plugins to include in the build.
FullEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Markdown,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  TodoList,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Alignment,
  Autosave,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  Clipboard,
  Font,
  Highlight,
  HorizontalLine,
  Mention,
  PageBreak,
  RemoveFormat,
  StandardEditingMode,
  CodeBlock,
  SpecialCharacters,
  SpecialCharactersEmoji,
  SpecialCharactersEssentials,
  WordCount,
  ImageResize,
  ImageTextAlternative,
  SimpleUploadAdapter,
  Base64UploadAdapter,
  TableProperties,
  CloudServices,
  TableCellProperties
]




// Editor configuration.
FullEditor.defaultConfig = {
  toolbar: {
    items: [
      'undo', 'redo',
      '|',
      'heading',
      '|',
      'bold', 'italic', 'strikethrough', 'code',
      '|',
      'bulletedList', 'numberedList', 'todoList',
      '|',
      'link', 'uploadImage', 'insertTable', 'blockQuote', 'codeBlock', 'horizontalLine', 'specialCharacters'
    ]
  },
  heading: {
    options: [
      { model: 'paragraph', title: '正文', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'H1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'H2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'H3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'H4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'H5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'H6', class: 'ck-heading_heading6' }
    ]
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28]
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative'
    ],
    styles: ['full', 'side', 'alignLeft', 'alignCenter', 'alignRight']
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
}
