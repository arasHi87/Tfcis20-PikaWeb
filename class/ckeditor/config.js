/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.filebrowserBrowseUrl      = 'class/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = 'class/ckfinder/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = 'class/ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl      = 'class/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'; //可上傳一般檔案
    config.filebrowserImageUploadUrl = 'class/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';//可上傳圖檔
    config.filebrowserFlashUploadUrl = 'class/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';//可上傳Flash檔案
    config.extraPlugins += (config.extraPlugins ? ',lineheight' : 'lineheight');
}