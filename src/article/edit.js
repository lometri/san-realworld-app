import san from 'san';
import { Link, router } from 'san-router';
import { connect } from 'san-store';
import { Types as ActionTypes } from './action';

export default connect.san(
    {
        article: 'article',
        user: 'user',
        isAuthenticated: 'isAuthenticated'
    },
    {
        add: ActionTypes.ADD,
        edit: ActionTypes.EDIT,
        get: ActionTypes.GET
    }
)(san.defineComponent({

    template: `
        <div class="editor-page">
          <div class="container page">
            <div class="row">
              <div class="col-md-10 offset-md-1 col-xs-12">
                <ul s-if="errors" class="error-messages">
                  <li s-for="v, k in errors">{{ k }} {{ v }}</li>
                </ul>
                <form>
                  <fieldset disabled="{{inProgress}}">
                    <fieldset class="form-group">
                      <input type="text" class="form-control form-control-lg" value="{=article.title=}" placeholder="Article Title">
                    </fieldset>
                    <fieldset class="form-group">
                      <input type="text" class="form-control" value="{=article.description=}" placeholder="What's this article about?">
                    </fieldset>
                    <fieldset class="form-group">
                      <textarea class="form-control" rows="8" value="{=article.body=}"
                        placeholder="Write your article (in markdown)"
                      >
                      </textarea>
                    </fieldset>
                    <fieldset class="form-group">
                      <input type="text" class="form-control" placeholder="Enter tags" value="{=tagInput=}" on-keyup="addTag($event)">
                      <div class="tag-list">
                        <span class="tag-default tag-pill" s-for="tag, index of article.tagList">
                          <i class="ion-close-round" on-click="removeTag(tag)"></i>
                          {{ tag }}
                        </span>
                      </div>
                    </fieldset>
                  </fieldset>
                  <button disabled="{{inProgress}}" class="btn btn-lg pull-xs-right btn-primary" on-click="onPublish()">
                    Publish Article
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    `
}))