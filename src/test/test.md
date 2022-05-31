## Manual testing

The following manual end-to-end tests were performed:

### Authentication

- **On the "Register" page:**
  - When no e-mail or password were entered, deny registration
  - When the e-mail does not match the format, deny registration
  - When password is shorter than 6 characters, deny registration
  - When both e-mail and password are entered with the correct format:
    1. A request will be sent to the server
    2. A prompt will come up when registration is SUCCESSFUL
  - When crendentials that have been registered are entered again, request will be sent but deny registration and an alert will pop up
  - When the close button is clicked, modal will close and go back to "Login" page
- **On the "Login" page**
  - When no e-mail or password were entered, deny login
  - When the e-mail does not match the format, deny login
  - When both the e-mail and password were enetered with correct format:
    1. A request will be sent to the server
    2. If the login credentials doee not match any of the users registered in the "Registration" page, deny login
    3. If the login credentials match at least one of the registered credentials, approve login and jump to the AdminBoard page
- On the "AdminBoard" page:
  - when "Logout" button is clicked, will jump back to "Login" page and have to log in with the correct credentials again

### CRUD functionality

On the "AdminBoard" page:

#### Rendering user list

- A GET request should be sent to the server, which returns a list of users and rendered on the screen as cards
- All the cards should show a valid name and avatar image

#### Add

- Click on the "Add" button and an "Breed hedgehog" modal will pop up
- In the "Breed hedgehog" modal:
  - When no hedgehog _name_ is given, deny confirming adding
  - When no image URL is given, shows "No image"
  - When an image URL is given:
    - If the URL has a valid image (e.g. https://picsum.photos/200/300), show it on the avatar
    - If the URL does not have a valid image, shows "Image not found" in the Avatar
  - When a name is given and then click "Breed me", a request should be sent and a new user should be rendered on the AdminPage

### Delete

- Click on any user's "Delete" button will create a "Delete" Modal for that user
- Click on the "Close" button will close the modal
- Click on the "Bye XXX" button will send a request to the server, then the user card will be removed in the rendered list
- Both users returned from the server AND those added by the website user can be deleted in the rendered list

### Responsiveness

- All the tests above should not hide/clip any details, or create unappealing appearance in screen width 320px~2000px and screen height 550px~1500px
