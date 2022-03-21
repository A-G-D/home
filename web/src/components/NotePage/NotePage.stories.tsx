import NotePage from './NotePage'

const bodyHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. At ille pellit, qui permulcet sensum voluptate. Quod non faceret, si in voluptate summum bonum poneret. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Duo Reges: constructio interrete. Quam tu ponis in verbis, ego positam in re putabam. Aliter enim explicari, quod quaeritur, non potest. </p>

<p>Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Ut in geometria, prima si dederis, danda sunt omnia. Hoc est dicere: Non reprehenderem asotos, si non essent asoti. Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. </p>

<p>Putabam equidem satis, inquit, me dixisse. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Virtutibus igitur rectissime mihi videris et ad consuetudinem nostrae orationis vitia posuisse contraria. Quid est, quod ab ea absolvi et perfici debeat? </p>

<p>Omnes enim iucundum motum, quo sensus hilaretur. Sed ad haec, nisi molestum est, habeo quae velim. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Summum a vobis bonum voluptas dicitur. </p>`

export const generated = () => {
  return (
    <NotePage
      className='bg-white border-red-600 border-2'
      options={{
        margin: {
          top: { thickness: 72 },
          bottom: { thickness: 72 },
          left: { thickness: 64, offset: 8 },
          right: { thickness: 0, offset: 32 },
        },
        lineHeight: 2,
        lineDividerThickness: 1,
        fontSize: 16,
        bodyClassName: 'flex flex-col gap-8',
        bodyStyles: { fontFamily: 'Raw Print Formal' },
      }}
      dangerouslySetInnerHTML={{ __html: bodyHTML }}
    />
  )
}

export default { title: 'Components/NotePage' }
