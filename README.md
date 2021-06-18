# DINTMark v1.4

## Introduction

**DINTMark** is a markup notation system designed to allow for easy
formatting of plain text, similarly to Markdown. The reason for developing a
new system is mainly to extend Markdown's functionality, especially in the
formatting aspect of things.

DINTMark is designed with HTML in mind: That is, the syntax has been
designed to be easily transformed into HTML tags, by use of *regex* or
similar tools.

To use *DINTMark*, a parser is needed. A working parser made by the author of
this document can be found [here](https://dintdt.github.io/dintmark/dintmark-parser.html).

### Parser

This particular parser has a control bar at the top of the page. It has a
button with which to upload the source file. The `Dark/Light mode` button will
toggle between a white-background/black-text and dark-background/white-text.
The control bar will not be printed. Even if Dark mode is toggled, the printed
document will have a white background and black text.

The expected use of this parser is to render the document through the browser
and use the browser's own Print function to either print the file or export it
to PDF.

## Syntax

To start a *paragraph*, a line must begin with a *single space*. By default,
paragraphs end when a new block element begins, so no special mark is used when
the paragraph is to be closed.

Text formatting is done by encasing a section of text in square brackets,
and a combination of characters following the opening bracket and preceding the
closing bracket. For example, the plain text `[XY text XY]` would have the
format indicated by `XY` in this documentation.

The following character combinations are allowed, followed by the effect
they have:
 - `[*xxx*]` causes text to be displayed as *italics*
 - `[**xxx**] ` causes text to be displayed as **bold**
 - `[***xxx***]` causes text to be displayed as ***bold and italics***
 - `[^xxx^]` causes text to be displayed as <sup>superscript<sup>
 - `[_xxx_]` causes text to be displayed as <sub>subscript</sub>

There are some formatting options that do not have content. The following is a
list of there formatting options:

 - `[---]` shows a horizontal bar that denotes a break in content. Is displayed as
	a `<hr>` element.
 - `[vvv]` denotes a page break. It is shown as a dotted line on the parser, but
	it will not be shown when printing.

### Headings

There are a total of 6 heading levels. They are meant to indicate where a
section starts. A heading must be in a single line, and must follow this syntax:
 - `[=Heading level 1=]`
 - `[==Heading level 1==]`
 - `[===Heading level 1===]`
 - and so on. The number of `=`s on each side indicates the heading level.

Alternatively, `#` can be used instead of `=` to make the headings be
preceded by numbers. The DINTMark version of this document uses numbered headings.

A special heading can be used for the title of the document. The title has a larger
font than the level-1 headings, and it is centered. To use this heading, use the
following syntax:
`[=!TITLE!=]`

There is no `[#!TITLE!#]` syntax, as the title is never expected to be numbered.

### Links

Hyperlinks can be embedded into the document using the following syntax:

`[[URL](LABEL)]` or `[[URL]]`

where `URL` would be the link to follow, and `LABEL` would be the text that
is displayed instead of the raw url.

If the `[[URL]]` syntax is used, the raw url will be displayed instead of a label.

#### Images

A hyperlink can be specified to be an image. In that case, the image will be
displayed instead of being linked to. To embed an image into the document, use
the following syntax:

 `[![URL]!]`

Images can have captions. Add `[-| CAPTION |-]` **immediately** after an
image or after the link that uses an image as a label to add a caption. Make sure
not to begin a paragraph by accident by adding a space at the beginning of the line.

Captions can be numbered automatically. Use `[#|xxx|#]` instead of `[-|xxx|-]` to
have the caption begin with "*Figure X.*". *X* will be replaced by its corresponding
number. Note that when an image is the label of a link, the caption is also part of the
hyperlink. The provided parser styles the captions to look like regular text.

Images can be scaled using the following syntax:

`[![ IMG-URL ][% SCALE %]!]`

where `SCALE` is a number.

### Quote blocks
Quote blocks can be added using the following syntax:

`["TEXT"]`

Instead of using the blockquote element of HTML, it uses a quote element with
the "display:block" style applied to it. This is done because blockquote
elementes do not render properly when printing.

### Lists

Lists can be either *ordered* or *unordered*.

#### Ordered Lists

Ordered lists have each element of the list preceded by a number that
increases as the elements go on. An ordered list follows this syntax:
```
[x	x. This is the first element of the list.
	x. This is the second element.
	x. Note that all of these lines begin with a TAB space.
	x. This is the last element. It ends with a specific character combination. x]
```
#### Unordered Lists

Unordered lists have each element preceded by a bullet point. An unordered
list follows this syntax:
```
[-	-- This is an element of the list.
	-- This is another element.
	-- Note that all of these lines begin with a TAB space.
	-- This is the last element. It ends with a specific character combination. -]
```
Note that each `--` must have a space at both sides.

### Math

**DINTMark** uses *MathJax* to render mathematical formulas. This
documentation will not explain MathJax syntax. However, note that DINTMark uses
`[$` and `$]` instead of `$` at both sides. Note that MathJax elements are rendered inline.

Block math (instead of inline math) can be simulated using a *centered paraghraph*.

Note that there is notation for adding references to formulas. By using `[!$ x $!]`,
some text can be placed at the right of the formula.

### Tables

Tables are a useful way to display data in an ordered way. Markdown does not
have tables by default, and it implements them in the Markdown Extended Syntax.
In DINTMark, they are implemented by default, and they use the following syntax:	
```
	[|| This is a header         || This is the second column ||
	|   This is a regular cell   |  This is another cell      |]
	[-| Tables can also have captions, and they can also be numbered. Note that it
	can be wider than the table, which is not the HTML default.|-]
```
Tables are automatically centered in the page.

Table headings are centered by default. Cell contents can be aligned
horizontally with the following syntax:
 - `[| --: xxx |]` will align text to the left.
 - `[| :-: xxx |]` will align text to the center.
 - `[| :-- xxx |]` will align text to the right.

### Headers and Footers

*Headers* and *footers* are sections than are printed on every page.
Headers are printed at the top of the page, and footers are printed at the
bottom. To include them in your document, use the following syntax.

`[H| This is a header, and it appears at the top of every page. |H]`

`[F| This is a footer, and it appears at the bottom of every page. |F]`

When viewing it on browser, these sections are rendered where they are on the
source file. Headers are rendered with a light green, dotted border, whereas
footers are rendered with a red, dashed border. When printing, they will only
show on the top and bottom of pages, but not in their source file location.

Do not use more than one header and one footer per document. The behavior in
this case is not defined. The parser given in the Introduction will render all
of the defined headers overlapping each other (same for footers).

## Options

Having customizability in mind, **DINTMark** has a way to allow authors to
choose between certain formatting functions that apply to the whole document.
These *options* are usually put in the first lines of the text file, and
follow the following syntax:

`[?xxx=yyy?]`

where `xxx` is the option name and `yyy` is the value for that option.

The following options are available:
 - `justify` will make the text in all paragraphs be justified when set to `true`.
	That means that every line, except for the last of each paragraph, will
	span the whole width of the page.
