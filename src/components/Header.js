import { Box, Text, Button } from '@skynexui/components';

export default function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    styleSheet={{ color: '#c9c9c9', border: '1px solid #c9c9c9' }}
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}