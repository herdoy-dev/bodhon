'use client'
import { useGetLatestPrograms } from '@/hooks/programs/usePrograms'
import { Grid } from '@radix-ui/themes'
import ProgramCard from './program-card'

function LatestPrograms() {
    const {latestPrograms} = useGetLatestPrograms()
  return (
    <section className="mb-10">
        <h1 className="text-3xl mb-5 font-semibold">Our Programs</h1>
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          {latestPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title || ""}
              caption={program.description || ""}
              image={program.thumbnail}
            />
          ))}
        </Grid>
      </section>
  )
}

export default LatestPrograms