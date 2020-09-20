import React, { useRef, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import EditProfilePage from "./pages/edit-profile";
import ExplorePage from "./pages/explore";
import FeedPage from "./pages/feed";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";
import PostPage from "./pages/post";
import ProfilePage from "./pages/profile";
import SignUpPage from "./pages/signup";
import PostModal from "./components/post/PostModal";

function App() {
  const history = useHistory();
  console.log(history);
  // Returns the location {} that represents the current URL
  const location = useLocation();
  console.log(location);
  const prevLocation = useRef(location);

  console.log(prevLocation);
  const modal = location.state?.modal;

  console.log(modal);

  useEffect(() => {
    console.log(history.action, modal);
    if (history.action !== "POP" && !modal) {
      prevLocation.current = location;
    }
  }, [history.action, location, modal]);

  // If modal is true && we move to a different route than modal is open
  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Switch location={isModalOpen ? prevLocation.current : location}>
        <Route exact path="/" component={FeedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/p/:postId" component={PostPage} />
        <Route path="/accounts/edit" component={EditProfilePage} />
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      {isModalOpen && <Route exact path="/p/:postId" component={PostModal} />}
    </>
  );
}

export default App;
