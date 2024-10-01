const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const conn = new WAConnection();

async function connectToWhatsApp() {
    conn.on('open', () => {
        console.log('Successfully connected to WhatsApp');
        console.log('Credentials:', conn.base64EncodedAuthInfo());
    });

    // Log in to WhatsApp
    await conn.connect();

    // Listen for new messages
    conn.on('chat-update', async (chat) => {
        if (!chat.hasNewMessage) return;
        const message = chat.messages.all()[0];
        
        if (!message.message) return;  // If there is no actual message, skip
        const messageType = Object.keys(message.message)[0];
        const text = message.message.conversation || message.message[messageType].caption || '';
        const sender = message.key.remoteJid;

        // Check if the message starts with ".send bugs"
        if (text.startsWith('.send bugs')) {
            handleSendBugs(text, sender);
        }
    });
}

async function handleSendBugs(text, sender) {
    // Extract the arguments from the message
    const args = text.split(' ');

    // Ensure there is a recipient (phone number or group link)
    if (args.length < 3) {
        await conn.sendMessage(sender, 'Please provide a valid phone number or group link.', MessageType.text);
        return;
    }

    const recipient = args[2];  // Phone number or group link
    const bugsMessage = '⚠️ BUG ALERT ⚠️'; // Message to send

    try {
        if (recipient.startsWith('https://chat.whatsapp.com/')) {
            // Handle group invite link
            const groupInviteCode = recipient.split('/').pop();  // Extract the group invite code
            const groupId = await conn.acceptInvite(groupInviteCode);
            await conn.sendMessage(groupId, bugsMessage, MessageType.text);
        } else if (/^\d+$/.test(recipient)) {
            // Handle phone number
            await conn.sendMessage(`${recipient}@s.whatsapp.net`, bugsMessage, MessageType.text);
        } else {
            await conn.sendMessage(sender, 'Invalid recipient format. Please provide a valid phone number or group link.', MessageType.text);
        }
    } catch (error) {
        console.error('Error sending bugs:', error);
        await conn.sendMessage(sender, 'Failed to send bugs. Please check the recipient details and try again.', MessageType.text);
    }
}

connectToWhatsApp();