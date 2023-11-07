import React, { useCallback } from 'react';
import { useUserAuth } from './_utils/auth-context';
import Layout from './layout';

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub: ", error);
      
    }
  }, [gitHubSignIn]);

  const handleSignOut = useCallback(async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
  
    }
  }, [firebaseSignOut]);

  return (
    <Layout>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleSignOut}>Logout</button>
          </div>
        ) : (
          <div>
            {}
            <button onClick={handleSignIn}>Login with GitHub</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
