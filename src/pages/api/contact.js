export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: '方法不允许' });
    }

    const { name, email, message } = req.body;

    // 简单服务端校验
    if (!name || !email || !message) {
        return res.status(400).json({ message: '请填写所有字段' });
    }

    // 在实际项目中，这里会接入邮件服务或存储
    console.log('收到新的联系表单提交：', { name, email, message });

    // 返回成功
    res.status(200).json({ message: '提交成功' });
}