import '../../App.css';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.calendly.com/users/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjYwMzExNTIxLCJqdGkiOiJlZDc4NDUwOS01NzhjLTQ2YTgtYmNiYy01YjAyYzEyMjNlNmIiLCJ1c2VyX3V1aWQiOiI5MmJkNzVlZS1mMjYyLTQ1ZjktYjE4NS1mNGI5YzhiMDVkNDQifQ.b_7gCYCjZ3O-CRTuF8OcRA4IQIuPLr1iUBUYX0yw2LdQmWlXdzdEfbP_yhZGYUiJ3Yft2aQ8M5JB1hU7wjauqA',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          textAlign: 'left',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
        className="content"
      >
        <div>
          <div
            style={{
              border: '1px solid #E3E4E7',
              padding: '40px',
              display: 'flex',
              borderRadius: 7,
              margin: 'auto',
            }}
            className="left_content"
          >
            <div>
              <svg
                viewBox="0 0 75 24"
                width="75"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="l5Lhkf"
              >
                <g id="qaEJec">
                  <path
                    fill="#ea4335"
                    d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                  ></path>
                </g>
                <g id="YGlOvc">
                  <path
                    fill="#34a853"
                    d="M58.193.67h2.564v17.44h-2.564z"
                  ></path>
                </g>
                <g id="BWfIk">
                  <path
                    fill="#4285f4"
                    d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                  ></path>
                </g>
                <g id="e6m3fd">
                  <path
                    fill="#fbbc05"
                    d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                  ></path>
                </g>
                <g id="vbkDmc">
                  <path
                    fill="#ea4335"
                    d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                  ></path>
                </g>
                <g id="idEJde">
                  <path
                    fill="#4285f4"
                    d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                  ></path>
                </g>
              </svg>
              <h2 style={{ fontWeight: 600 }}>Create your Google Account</h2>
              <Box style={{ display: 'flex', flexDirection: 'row' }}>
                <TextField
                  autoComplete="false"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    marginRight: 1,

                    '& .MuiInputBase-root': {
                      height: 38,
                    },
                  }}
                />
                <TextField
                  autoComplete="false"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiInputBase-root': {
                      height: 38,
                    },
                  }}
                />
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <TextField
                  autoComplete="false"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-root': {
                      height: 38,
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span style={{ fontWeight: 600, color: 'black' }}>
                          @gmail.com
                        </span>
                      </InputAdornment>
                    ),
                  }}
                  helperText="You can use letters, numbers and ."
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Button
                  type="text"
                  style={{
                    textTransform: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Use my atual email adress instead{' '}
                </Button>
              </Box>

              <Box style={{ display: 'flex', flexDirection: 'row' }}>
                <TextField
                  autoComplete="false"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
                  type={showPassword ? 'text' : 'password'}
                  sx={{
                    marginRight: 1,

                    '& .MuiInputBase-root': {
                      height: 38,
                    },
                  }}
                />
                <TextField
                  autoComplete="false"
                  id="outlined-basic"
                  label="Confirm"
                  variant="outlined"
                  size="small"
                  type={showPassword ? 'text' : 'password'}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: 38,
                    },
                  }}
                />
              </Box>
              <Box>
                <span style={{ fontSize: 12, marginLeft: 15 }}>
                  Use 8 or more caracters in a mist of letters, numbers and
                  symbols.
                </span>
              </Box>

              <Box>
                <Checkbox
                  style={{ margin: 0 }}
                  checked={showPassword}
                  onClick={changeShowPassword}
                />
                <span>Show password</span>
              </Box>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  type="text"
                  style={{
                    textTransform: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    fontWeight: 'bold',
                  }}
                >
                  Login instead
                </Button>
                <Button
                  style={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    background: '#1A73E8',
                    color: 'white',
                    width: '100px',
                  }}
                >
                  Next
                </Button>
              </Box>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="right_content"
            >
              <img
                src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                alt=""
                width="244"
                height="244"
                class="j9NuTc TrZEUc"
              />
              <span
                style={{ maxWidth: 244, fontWeight: 600, textAlign: 'center' }}
              >
                One Account. All the Google services working for you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
