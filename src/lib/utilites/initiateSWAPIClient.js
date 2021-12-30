import {setClient} from 'svelte-apollo';
import createApolloClient from '$lib/utilites/createApolloClient';
setClient(createApolloClient());
