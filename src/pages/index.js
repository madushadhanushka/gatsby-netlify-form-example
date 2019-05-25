import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
var diff = require('diff')
import { Diff2Html } from 'diff2html'
import 'react-gh-like-diff/lib/diff2html.min.css';
export default class Index extends React.Component {
  getDiff() {
    var changesOth = diff.createPatch("Changes", "slkdjflks sfd", "kdkdkdkd sfd")
    var diffHtml = Diff2Html.getPrettyHtml(
      changesOth,
      {inputFormat: 'diff', showFiles: true, matching: 'lines', outputFormat: 'side-by-side'}
    );
    document.getElementById("diff_content").innerHTML = diffHtml;
    console.log("done", changesOth)
  };
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>
          This is an example site integrating Netlify’s form handling with Gatsby
        </p>
        <ul>
          <li><Link to="/contact/">Basic contact form</Link></li>
          <li><Link to="/file-upload/">Form with file upload</Link></li>
          <li><Link to="/recaptcha/">Form with reCAPTCHA 2</Link></li>
          <textarea name="fileOne" />
          <textarea name="fileTwo" />
          <button type="submit" onClick={this.getDiff}>Send</button>
        </ul>
        <div id="diff_content"></div>
      </div>
    );
  }
}
