import { Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
export default function Home() {
    return (
        <Container>
            <Heading as={'h1'}>Starter Template loaded successfully.</Heading>
            <Text>The following packages are installed in this project:</Text>
            <UnorderedList>
                <ListItem>Chakra-UI</ListItem>
                <ListItem>Axios</ListItem>
                <ListItem>Firebase</ListItem>
                <ListItem>Formik</ListItem>
                <ListItem>Yup</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>React-Icons</ListItem>
                <ListItem>UUID</ListItem>
                <ListItem>Cookies-next</ListItem>
                <ListItem>React-bootstrap</ListItem>
                <ListItem>Bootstrap</ListItem>
            </UnorderedList>
            <Text>The template also includes with VScode launch.json File</Text>
            <Text>
                .env, .env.development, .env.production and .env.local files are included in the project directory. .env, .env.development and
                .env.production files can be added to the repository as they define defaults. .env\*.local is added to .gitignore, as those files are
                intended to be ignored. .env.local is where secrets can be stored.
            </Text>
            <Text>Certain changes to tsconfig.json file to make typescript more strict.</Text>
        </Container>
    );
}
