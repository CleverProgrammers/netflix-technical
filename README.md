# Netflix App Technical

βΉοΈ The Movie database API is located here for reference: [Movies API](https://developers.themoviedb.org/3/getting-started/introduction)

<br>

## Visual Reference Guide for Styling

![Screenshot](referenceImage.png)

<br>

## Hero.js

ππ½ Fix the styling of the `Hero` component. (Title, CTA Buttons, and Hero Image)
<br>
ππ½ Replace the Lorem Ipsums with the data from the API. (Title and Description/Overview)

<br>

## Row.js

ππ½ Create Static data for the `Row` component and save to the 'movies' state.
<br>
ππ½ Get the static data to render onto the screen using the 'movies' state.
<br>
ππ½Render the static data
<br>
ππ½ Fetch the data from the API and save to the 'movies' state. If the data is largeRow then use the data from the API: `poster_path` for the image. If the data is not largeRow then use the `backdrop_path` for the image.
<br>
ππ½ Once you have the static data rendering and movies fetched from the API, replace the static data with the data from the API.

<br>

:warning: **Note:** Notice the `fetchUrl` prop that is being passed into the `Row` component. This is the dynamic API endpoint that you will need to use to get the data for each `Row` component. You will need to fetch the data from the API and save it to the `movies` state.

<br>

:warning: **Note:** isLargeRow is a prop that is being passed into the `Row` component. This prop is used to determine if the `Row` component is the large row or not. If the `Row` component is the large row, then the styling will be different. You will need to use this prop to determine the styling of the `Row` component.
