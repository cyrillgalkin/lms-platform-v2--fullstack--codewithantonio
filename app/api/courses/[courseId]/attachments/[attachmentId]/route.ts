import { NextRequest } from 'next/server';

interface ContextProps {
  params: {
    courseId: string;
    attachmentId: string;
  };
}

export async function DELETE(request: NextRequest, { params }: ContextProps) {
  try {
  } catch (error) {
    console.log('[ATTACHMENTS_ID]', error);
  }
}
