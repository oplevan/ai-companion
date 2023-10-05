import prismadb from '@/lib/prismadb';
import CompanionForm from './components/companion-form';

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

export default async function CompanionPage({ params }: CompanionIdPageProps) {
  // TODO: Check subscription

  // fetch an existing companion using ID from url,
  // but if click on the sidebar "+Create" button ID is always going to be "new"
  // which means this companion doesn't exist. This way it will either show "Create" page or "Edit" page
  const companion = await prismadb.companion.findUnique({ where: { id: params.companionId } });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}
