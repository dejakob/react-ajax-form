# React Ajax Form

Submit the data of an HTML form over Ajax and update without reloading the page.

[![NPM](https://img.shields.io/npm/v/react-ajax-form/latest.svg?label=npm)](https://npmjs.com/package/react-ajax-form)

## Install

`npm i react-ajax-form` or `yarn add react-ajax-form`

## Example

```js
import AjaxForm from 'react-ajax-form';

function MyForm() {
    return (
        <AjaxForm
            method="POST"
            action="/categories/add"
            onSuccess={MyFormSuccess}
            onFail={MySubmitError}
        >
            <fieldset>
                <label
                    htmlFor="categoryName"
                ></label>
                <input
                    id="categoryName"
                    name="categoryName"
                />
            </fieldset>

            <button
                type="button"
            >
                Add category
            </button>
        </AjaxForm>
    );
}

/**
 * Replace form with success component
 */
function MyFormSuccess({ request, response }) {
    return (
        <p>
            Successfully added {request.categoryName}.
        </p>
    );
}

/**
 * Error to show above the form when something goes wrong
 */
function MySubmitError({ request, response }) {
    return (
        <p>
            Category could not be added. Please try again.
        </p>
    )
}
```