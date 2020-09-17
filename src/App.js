import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
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

  return (
    <Switch>
      <Route exact path="/" component={FeedPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route exact path="/:username" component={ProfilePage} />
      <Route exact path="/p/:postId" component={PostPage} />
      <Route path="/accounts/edit" component={EditProfilePage} />
      <Route path="/accounts/login" component={LoginPage} />
      <Route path="/accounts/emailsignup" component={SignUpPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
